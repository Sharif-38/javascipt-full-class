
// Nodes VS Element in DOM
const bodyName = document.querySelector('body')
console.log(bodyName)
console.log(bodyName.childNodes)

/**
 * Nodes এবং Elements এর মধ্যে পার্থক্য
Node কি?
Node হলো DOM Tree এর প্রতিটি ইউনিট, যা ডকুমেন্টের একটি অংশকে উপস্থাপন করে। এটি HTML বা XML ডকুমেন্টের যেকোনো উপাদান হতে পারে।

Node এর ধরনসমূহ (Node Types):
Element Node: HTML ট্যাগকে উপস্থাপন করে। (যেমন <div>, <p>, <a>)
Text Node: HTML ট্যাগের ভিতরের টেক্সট বা কন্টেন্টকে উপস্থাপন করে।
Attribute Node: HTML ট্যাগের এট্রিবিউটকে উপস্থাপন করে (যেমন class, id)।
Comment Node: ডকুমেন্টের মন্তব্যসমূহ (যেমন <!-- comment -->)।
Document Node: পুরো HTML ডকুমেন্টকে উপস্থাপন করে।


Element কি?
Element হলো একটি নির্দিষ্ট ধরনের Node যা শুধুমাত্র HTML বা XML ট্যাগকে প্রতিনিধিত্ব করে। এটি একটি Element Node।

Node এবং Element উদাহরণ সহ বিশ্লেষণ
উদাহরণ ১:
html
Copy code
<div id="example">Hello, World!</div>
DOM Tree:

<div> → Element Node
id="example" → Attribute Node
Hello, World! → Text Node
Explanation:

এখানে div ট্যাগ একটি Element।
id="example" একটি Attribute Node।
Hello, World! হলো একটি Text Node।


সব Elements Node, কিন্তু সব Nodes Element নয়।
 */

