Coffee Logger ☕

Coffee Logger is a web app that helps you keep track of your coffee beans and brewing recipes.
You can log coffees with details like name, roast date, tasting notes, and roast profile, and pair them with brewing recipes that include method, ratio, and optional step-by-step instructions.

🚀 Features

📒 Log Coffees – Save coffee details such as name, roast date, roast profile, and personal notes.

📝 Attach Recipes – For each coffee, create recipes with brewing method, ratio, and optional detailed instructions.

🔄 Organized & Connected – Recipes are tied to their coffees for easy management.

🎨 Modern UI – Clean and responsive design optimized for desktop and mobile.

🛠️ Tech Stack

Frontend: React + Tailwind CSS

Data: Supabase 



⚠️ Current Limitations

Shared Data: At the moment, the database is shared across all users. This means every user sees and can interact with the same coffee and recipe entries.

No Authentication: There is no per-user authentication or data isolation implemented yet.

This setup is intentional for the course project, but in a production version, row-level security (RLS) and user-specific data handling should be added to ensure privacy and proper multi-user support.

🌐 Live Demo
👉 https://coffeelogger.netlify.app/
