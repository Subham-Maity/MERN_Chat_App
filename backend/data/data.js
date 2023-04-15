const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Akshay Singh",
        email: "akshay.singh@yahoo.co.in",
      },
      {
        name: "Sudhanshu Patel",
        email: "sudhanshu54@rediffmail.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Akshay Singh",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Rajesh Sharma",
        email: "rajesh.sharma2@gmail.com",
      },
      {
        name: "Aakash Verma",
        email: "aakash.verma89@yahoo.co.in",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Rajesh Sharma",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Deepak Gupta",
        email: "deepak.gupta333@gmail.com",
      },
      {
        name: "Rudra Pratap Singh",
        email: "rudra_pratap_singh@hotmail.com",
      },
      {
        name: "Chhavi Malhotra",
        email: "chhavi_malhotra21@yahoo.co.in",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "College Friends",
    groupAdmin: {
      name: "Chhavi Malhotra",
      email: "chhavi_malhotra21@yahoo.co.in",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Vijay Kumar",
        email: "vijay_kumar72@rediffmail.com",
      },
      {
        name: "Arjun Singh",
        email: "arjun.singh3@yahoo.co.in",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];

module.exports = chats;
