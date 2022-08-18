import React, { useEffect, useState } from "react";
import { db, auth, storage } from "../../firebase.init.js";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  Timestamp,
  orderBy,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import User from "./User";
import MessageForm from "./MessageForm";
import Message from "./Message";
import { ToastContainer, toast } from "react-toastify";

const Chatroom = () => {


  const [users, setUsers] = useState([]);
  const [chat, setChat] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [msgs, setMsgs] = useState([]);
  const [myac, setMyac] = useState([]);

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [place, setPlace] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lati = position.coords.latitude;
      const long = position.coords.longitude;
      setLatitude(lati);
      setLongitude(long);

      // return lati, long
    });
  }, []);

  var api_key = "1457682e45754a919897779ad7ebeb78";

  var api_url = "https://api.opencagedata.com/geocode/v1/json";

  var request_url =
    api_url +
    "?" +
    "key=" +
    api_key +
    "&q=" +
    encodeURIComponent(latitude + "," + longitude) +
    "&pretty=1" +
    "&no_annotations=1";

  const user1 = auth.currentUser.uid;

  const successfulLookup = () => {
    // const { latitude, longitude } = position.coords;
    fetch(request_url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results[0].formatted);
        setPlace(data.results[0].formatted);
      });
  };

  useEffect(() => {
    const usersRef = collection(db, "users");
    // create query object
    const q = query(usersRef, where("uid", "not-in", [user1]));
    // execute query
    const unsub = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    });
    return () => unsub();
  }, []);

  // useEffect(() => {
  //   if (user) {
  //     setMyac(user);
  //     console.log(user)
  //   }
  // }, [user]);

  const selectUser = async (user) => {
    setChat(user);

    setInterval( () => {
      toast(`${chat.name} - ${chat.location}`);
    }, 5000);
    const user2 = user.uid;
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    const msgsRef = collection(db, "messages", id, "chat");
    const q = query(msgsRef, orderBy("createdAt", "asc"));

    onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMsgs(msgs);
    });



    // get last message b/w logged in user and selected user
    const docSnap = await getDoc(doc(db, "lastMsg", id));
    // if last message exists and message is from selected user
    if (docSnap.data() && docSnap.data().from !== user1) {
      // update last message doc, set unread to false
      await updateDoc(doc(db, "lastMsg", id), { unread: false });
    }
    // setChat("");
  };

  // fetch(request_url)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data.results[0].formatted);
  //     setPlace(data.results[0].formatted);
  //   });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user2 = chat.uid;

    

    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    let url;
    if (img) {
      const imgRef = ref(
        storage,
        `images/${new Date().getTime()} - ${img.name}`
      );
      const snap = await uploadBytes(imgRef, img);
      const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
      url = dlUrl;
    }

    await addDoc(collection(db, "messages", id, "chat"), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
      location: place,
    });

    await setDoc(doc(db, "lastMsg", id), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
      unread: true,
    });

    setText("");
    setImg("");
    setPlace("");
  };

  return (
    <div className="home_container">
      <div className="users_container">
        {users.map((user) => (
          <User
            key={user.uid}
            user={user}
            selectUser={selectUser}
            user1={user1}
            chat={chat}
          />
        ))}
      </div>
      <div className="messages_container">
        {chat ? (
          <>
            <div className="messages_user">
              <h3>{chat.name}</h3>
            </div>
            <div className="messages">
              {msgs.length
                ? msgs.map((msg, i) => (
                    <Message key={i} msg={msg} user1={user1} />
                  ))
                : null}
            </div>
            <MessageForm
              handleSubmit={handleSubmit}
              text={text}
              setText={setText}
              setImg={setImg}
              setPlace={setPlace}
            />
          </>
        ) : (
          <h3 className="no_conv">Select a user to start conversation</h3>
        )}
      </div>
    </div>
  );
};

export default Chatroom;
