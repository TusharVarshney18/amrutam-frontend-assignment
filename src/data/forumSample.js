export const sampleQuestions = [
  {
    id: "q1",
    author: { name: "Anonymous", avatar: "/forum/admin.png" },
    title:
      "Explores the potential benefits of traditional Ayurvedic practices in managing stress and improving mental well-being. Any suggestions?",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(), // 5 days ago
    replies: [
      {
        id: "r1",
        author: { name: "Dr. Mathew Adams", avatar: "/forum/dr.jpg" },
        body: "Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques such as meditation.",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
        likes: 2,
      },
    ],
    likes: 23,
    saves: 3,
  },

  {
    id: "q2",
    author: { name: "Anonymous", avatar: "/forum/admin.png" },
    title: "Is applying oil to scalp daily good for hair fall?",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    replies: [],
    likes: 10,
    saves: 1,
  },

  {
    id: "q3",
    author: { name: "Rohit Sharma", avatar: "/forum/admin.png" },
    title: "Which Ayurvedic herbs are best for improving digestion?",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
    replies: [
      {
        id: "r31",
        author: { name: "Dr. Aditi Rao", avatar: "/forum/dr.jpg" },
        body: "Triphala, ginger, cumin, and fennel are excellent for enhancing digestive fire (Agni). Consume warm water regularly.",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
        likes: 7,
      },
      {
        id: "r32",
        author: { name: "Dr. Harish Verma", avatar: "/forum/dr.jpg" },
        body: "Avoid cold drinks and heavy foods. Consider Ayurvedic formulations like Hingvashtak Churna.",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6).toISOString(),
        likes: 2,
      },
    ],
    likes: 45,
    saves: 12,
  },

  {
    id: "q4",
    author: { name: "Meera", avatar: "/forum/priya.png" },
    title:
      "Can Ayurveda cure chronic migraines? Any long-term treatment options?",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14).toISOString(), // 14 days ago
    replies: [
      {
        id: "r41",
        author: { name: "Dr. Sonia Iyer", avatar: "/forum/priya.jpg" },
        body: "Shirodhara, Nasya therapy, Brahmi, and Ashwagandha have shown great results in chronic migraine management.",
        createdAt: new Date(
          Date.now() - 1000 * 60 * 60 * 24 * 13
        ).toISOString(),
        likes: 11,
      },
    ],
    likes: 60,
    saves: 22,
  },

  {
    id: "q5",
    author: { name: "Aarav", avatar: "/forum/admin.png" },
    title: "Best Ayurvedic remedies to boost immunity naturally?",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 10).toISOString(), // 10 hours ago
    replies: [
      {
        id: "r51",
        author: { name: "Dr. Kavya", avatar: "/forum/dr.jpg" },
        body: "Chyawanprash, tulsi tea, giloy, and turmeric milk help boost immunity effectively.",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 9).toISOString(),
        likes: 4,
      },
      {
        id: "r52",
        author: { name: "Dr. Karthik", avatar: "/forum/dr.jpg" },
        body: "Regular yoga, pranayama, and exposure to morning sunlight are essential for natural immunity enhancement.",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
        likes: 1,
      },
    ],
    likes: 17,
    saves: 5,
  },

  {
    id: "q6",
    author: { name: "Anonymous", avatar: "/forum/admin.png" },
    title: "Does drinking hot water really help with weight loss?",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), // 2 days ago
    replies: [],
    likes: 5,
    saves: 0,
  },

  {
    id: "q7",
    author: { name: "Neha", avatar: "/forum/priya.png" },
    title: "What is the best Ayurvedic approach to balance Vata dosha?",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1).toISOString(), // 1 day ago
    replies: [
      {
        id: "r71",
        author: { name: "Dr. Ishita", avatar: "/forum/dr.jpg" },
        body: "Warm foods, sesame oil massage, regular sleep schedule, and calm routines are essential to balance Vata.",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 20).toISOString(),
        likes: 3,
      },
    ],
    likes: 8,
    saves: 2,
  },

  {
    id: "q8",
    author: { name: "Rajiv", avatar: "/forum/admin.png" },
    title: "Is Ashwagandha safe for daily use? What is the recommended dosage?",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
    replies: [
      {
        id: "r81",
        author: { name: "Dr. Mala", avatar: "/forum/dr.jpg" },
        body: "Yes, Ashwagandha is safe when taken in 300–500 mg/day doses. Check for thyroid issues first.",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
        likes: 9,
      },
    ],
    likes: 28,
    saves: 6,
  },

  {
    id: "q9",
    author: { name: "Sameer", avatar: "/forum/admin.png" },
    title: "What is the Ayurvedic perspective on insomnia?",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(), // 10 days ago
    replies: [
      {
        id: "r91",
        author: { name: "Dr. Raghav", avatar: "/forum/dr.jpg" },
        body: "Insomnia is linked to Vata imbalance. Warm milk with nutmeg, meditation, and Nasya help significantly.",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 9).toISOString(),
        likes: 14,
      },
    ],
    likes: 12,
    saves: 3,
  },
];
