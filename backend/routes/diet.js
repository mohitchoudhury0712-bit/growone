const express = require('express');
const router = express.Router();

router.post('/generate', async (req, res) => {
  console.log("🚀 Generating Smart Mock Diet Plan...");
  
  try {
    const { age, gender, goal, specifications } = req.body;

    // We will build a different diet based on their specific goal
    let breakfast, lunch, snack, dinner, tips;
    
    // Check what goal the user selected
    const isMuscleGain = goal && goal.toLowerCase().includes('gain');
    const isWeightLoss = goal && goal.toLowerCase().includes('loss');

    if (isMuscleGain) {
      breakfast = "* 4 Scrambled Eggs or 200g Paneer Bhurji with 2 whole wheat toasts\n* 1 Banana and a glass of milk or black coffee";
      lunch = "* 200g Grilled Chicken or Soya Chunks\n* 1.5 cups of Brown Rice or 3 Rotis\n* 1 bowl of Dal (Lentils) for extra protein\n* Mixed green salad";
      snack = "* 1 Scoop Whey Protein (or 2 boiled eggs)\n* A handful of almonds and walnuts";
      dinner = "* 150g Fish/Chicken or Tofu stir-fry\n* 1 Sweet potato or 2 Rotis\n* Light veggies (Broccoli/Spinach)";
      tips = "* Ensure a caloric surplus (eat more than you burn).\n* Lift heavy and sleep for 7-8 hours for muscle recovery.";
    } else if (isWeightLoss) {
      breakfast = "* Bowl of Oats with chia seeds, apple slices, and almond milk\n* Green Tea or Black Coffee (no sugar)";
      lunch = "* 1 bowl of Rajma or Chole (Chickpeas) cooked with less oil\n* 1 Roti or a small portion of quinoa\n* Large bowl of cucumber and tomato salad";
      snack = "* 1 Apple or Papaya bowl\n* Roasted Makhana (Fox nuts) or Chana";
      dinner = "* Clear vegetable soup or light Dal\n* Grilled Paneer or Chicken breast (100g)\n* Sautéed vegetables like zucchini and bell peppers";
      tips = "* Maintain a caloric deficit.\n* Get 10,000 steps daily walking around the campus.";
    } else {
      // Default / Maintain Weight
      breakfast = "* Veggie-loaded Poha or Upma\n* 1 glass of buttermilk or tea (low sugar)";
      lunch = "* 1 bowl of seasonal Sabzi (vegetable)\n* 2 Rotis and half a cup of rice\n* 1 small bowl of curd";
      snack = "* 1 portion of seasonal fruit\n* Peanut butter sandwich (1 slice of brown bread)";
      dinner = "* Light Khichdi with a teaspoon of ghee OR 2 Rotis with Dal\n* Side salad";
      tips = "* Stay active and hydrated.\n* Maintain a balanced macronutrient intake.";
    }

    // Add a custom section if they typed anything in the Preferences box
    let specsText = specifications 
      ? `\n\n**Custom Adjustments:**\n* Since you requested "${specifications}", feel free to swap out the standard ingredients above with alternatives that fit this preference.` 
      : "";

    // Assemble the final beautiful markdown string
    const mockDietPlan = `### 🍽️ Custom Nutrition Plan
**Profile:** ${age} years old | ${gender} | **Goal:** ${goal}

**🌅 Breakfast (Quick & Campus-Friendly):**
${breakfast}

**☀️ Lunch:**
${lunch}

**🌆 Evening Snack (Pre/Post Workout):**
${snack}

**🌙 Dinner (Light & Digestible):**
${dinner}
${specsText}

**💡 Pro Tips for your Schedule:**
${tips}
* Drink at least 3-4 liters of water daily.
* Try to prep your meals in advance to avoid spending too much at the canteen!`;

    // Simulate an AI thinking delay (1.5 seconds)
    setTimeout(() => {
      console.log("✅ SUCCESS: Diet Plan Sent!");
      res.json({ dietPlan: mockDietPlan });
    }, 1500);

  } catch (error) {
    console.error("❌ ERROR:", error.message);
    res.status(500).json({ message: "Server Error", details: error.message });
  }
});

module.exports = router;