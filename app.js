const sections = [
  {
    id: "thali",
    title: "Indian Thali",
    items: [
      ["Veg Thali", 120], ["Chicken Thali", 170], ["Desi Chicken Thali", 220],
      ["Mutton Thali", 230], ["Paneer Thali", 180], ["Mushroom Thali", 180],
      ["Fish Thali", 160], ["A9 Special Veg Thali", 200], ["A9 Special Non-veg Thali", 250]
    ]
  },
  {
    id: "starters",
    title: "Starters",
    items: [
      ["Dry Papad", 15], ["Fried Papad", 20], ["Masala Papad", 40],
      ["Green Salad", 40], ["Onion Salad", 20], ["Finger Chips", 100],
      ["Paneer Finger", 150], ["Paneer Pakoda", 150], ["Paneer Salt & Pepper", 150],
      ["Paneer Crispy", 200], ["Paneer Manchurian", 170], ["Chana Roast", 120],
      ["American Corn", 120], ["Veg Bullet", 180], ["Veg Crispy", 120],
      ["Veg Hara Bhara Kabab", 150], ["Veg Manchurian", 100], ["Paneer 65", 170],
      ["Chicken Pakoda", 160], ["Chicken Pakoda Boneless", 180], ["Prawn Salt & Pepper", 200],
      ["Prawn Golden Fried", 180], ["Chicken Roast", 170], ["Chicken Ghee Fry", 200],
      ["Chicken Bullet", 250], ["Chicken Mexican", 200], ["Chicken Crispy", 200],
      ["Chicken Manchurian", 170]
    ]
  },
  {
    id: "soups",
    title: "Soups & Chilly",
    items: [
      ["Chicken Sweet Corn Soup", 70], ["Chicken Hot and Sour Soup", 70],
      ["Chicken Manchurian", 80], ["Veg Sweet Corn Soup", 60],
      ["Veg Hot and Sour Soup", 60], ["Chicken Chilly", 170],
      ["Chicken Chilly Boneless", 200], ["Paneer Chilly", 170],
      ["Prawn Chilly", 200], ["Mushroom Chilly", 170], ["Sweet Corn Chilly", 160],
      ["Baby Corn Chilly", 160], ["Egg Chilly", 120], ["Omlet Chilly", 100]
    ]
  },
  {
    id: "main-veg",
    title: "Main Course Veg",
    items: [
      ["Paneer Tikka Masala", 250], ["Paneer Masala", 120], ["Paneer Varta", 130],
      ["Paneer Butter Masala", 140], ["Paneer Kadhai", 250], ["Paneer Hyderabadi", 140],
      ["Paneer Punjabi", 140], ["Paneer Patiala", 220], ["Paneer Hariyali", 220],
      ["Paneer Hungama", 220], ["Paneer kalivada", 220], ["Stuff Tomato", 150],
      ["Stuff Capsicum", 150], ["Mushroom Masala", 120], ["Mushroom Kadhai", 230],
      ["Mushroom Do Pyaza", 130], ["Chana Masala", 90], ["Dal Fry", 80],
      ["Dal Tadka", 80], ["Mixed Veg", 110], ["Veg Hyderadadi", 120],
      ["Veg Korma", 140], ["Malai Kofta", 170], ["Veg Kofta", 160],
      ["Veg Navaratna Korma", 170], ["Veg Kadhai", 200], ["Veg Bhuna", 200],
      ["Veg Sham Savera", 200], ["Veg A9 Special", 280]
    ]
  },
  {
    id: "main-nonveg",
    title: "Main Course Non-Veg",
    items: [
      ["Chicken Lotpot", 100], ["Chicken Kassa", 100], ["Chicken Masala", 120],
      ["Chicken Butter Masala", 160], ["Chicken Patiala", 250], ["Chicken Murgh Musallam", 450],
      ["Chicken Mughlai", 250], ["Chicken Keema Masala", 200], ["Chicken Handi", 300],
      ["Desi Chicken Lotpot", 170], ["Desi Chicken Kassa", 170], ["Desi Chicken Handi", 500],
      ["Mutton Lotpot", 170], ["Mutton Kassa", 170], ["Mutton Do Pyaza", 200],
      ["Mutton Mughlai", 280], ["Mutton Handi", 500], ["Prawn Masala", 180],
      ["Fish Masala/Curry", 100], ["Egg Curry", 80], ["Egg Bhujia Curry", 80],
      ["Egg Tadka", 90], ["Egg Omlet", 40], ["Butter Omlet", 60],
      ["Cheese Chicken Omlet", 100]
    ]
  },
  {
    id: "noodles",
    title: "Noodles",
    items: [
      ["Veg Noodles", 40], ["Egg Noodles", 60], ["Paneer Noodles", 90],
      ["Chicken Noodles", 80], ["Chicken Egg Noodles", 100],
      ["Nonveg Special Noodles", 150], ["Chicken Triple Schezwan", 120]
    ]
  },
  {
    id: "tandoor",
    title: "Tandoor",
    items: [
      ["Prawn Tikka", 200], ["Paneer Tikka", 180], ["Chicken Tikka", 180],
      ["Chicken Tandoori Half", 220], ["Chicken Tandoori Full", 400],
      ["Chicken Pahadi Kabab", 200], ["Chicken Seekh Kabab", 220],
      ["Chicken Banjara Kabab", 200], ["Chicken Achari Kabab", 200],
      ["Chicken Tangri Kabab", 240]
    ]
  },
  {
    id: "breads",
    title: "Indian Breads",
    items: [
      ["Tandoori Roti", 10], ["Butter Tandoori Roti", 15], ["Plain Naan", 30],
      ["Butter Naan", 35], ["Garlic Butter Naan", 45], ["Laccha Paratha", 30],
      ["Masala Kulcha", 50], ["Sahi Naan", 50], ["Kashmiri Naan", 100],
      ["Cheese Garlic Naan", 70], ["Alu Paratha", 50], ["Gobi Paratha", 50],
      ["Paneer Paratha", 60]
    ]
  },
  {
    id: "rice",
    title: "Rice & Biryani",
    items: [
      ["Veg Biriyani", 150], ["Chicken Biriyani", 160], ["Mutton Biriyani", 220],
      ["Plain Rice", 40], ["Jeera Rice", 60], ["Special Nonveg Biriyani", 300],
      ["Lemon Rice", 70], ["Mixed Fried Rice", 160], ["Veg Fried Rice", 120],
      ["Chicken Fried Rice", 150], ["Masala Rice", 70],
      ["Chicken Schezwan Fried Rice", 170], ["Schezwan Fried Rice", 140]
    ]
  },
  {
    id: "beverages",
    title: "Beverages",
    items: [
      ["Sweet", 20], ["Ice Cream", "M.R.P"], ["Lassi", 40], ["Butter Milk", 40],
      ["Cold Drink", 20], ["Masala Cold Drink", 30], ["Masala Soda (Sweet/Salt)", 30],
      ["Tea (Special)", 30], ["Coffee", 40]
    ]
  }
];

const menu = document.getElementById("menu");

for (const section of sections) {
  const sectionEl = document.createElement("section");
  sectionEl.className = "menu-section";
  sectionEl.id = section.id;

  const title = document.createElement("h2");
  title.textContent = section.title;
  sectionEl.appendChild(title);

  for (const [name, price] of section.items) {
    const item = document.createElement("div");
    item.className = "menu-item";

    const itemName = document.createElement("span");
    itemName.className = "item-name";
    itemName.textContent = name;

    const itemPrice = document.createElement("span");
    itemPrice.className = "item-price";
    itemPrice.textContent = typeof price === "number" ? `₹${price}` : price;

    item.append(itemName, itemPrice);
    sectionEl.appendChild(item);
  }

  menu.appendChild(sectionEl);
}

document.querySelectorAll(".category-nav button").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.target)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
