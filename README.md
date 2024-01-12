#GPT powered-NetFlix
-Create react-app
-configure Tailwind

#Features
-LoginIn/LogOut
-SignIn/Signout Form
-redirect to browse page(Security Ensure)-
-Browse(Authentification)


#Structure
-Header
-Main movie
-Trailer in BackGround
-title and description
-Movie Suggestions
-MovieList*N(infinite Sroll)

##Netflix GPT
1. Create React App
2. Sign up Form
3. Configured TailwindCSS
4. Header
5. Routing of App
   Login Form

6. Form Validation
7. useRef Hook
8. Firebase Setup
9. Deploying our app to production
10. Create SignUp User Account
11. Implement Sign In user Api
12. Created Redux Store with userSlice
13. Implemented Sign out
14. Update Profile


    
##BugFix: Sign up user displayName and profile picture update
BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
1. Unsubscibed to the onAuthStateChanged callback
2. Add hardcoded values to the constants file
3. Regiter TMDB API & create an app & get access token
4. Get Data from TMDB now playing movies list API
5. Custom Hook for Now Playing Movies
6. Create movieSlice
7. Update Store with movies Data
8. Planning for MainContauiner & secondary container
9. Fetch Data for Trailer Video
10. Update Store with Trailer Video Data
11. Embedded the Yotube video and make it autoplay and mute
12. Tailwind Classes to make Main Container look awesome
14. Build Secondary Component
-Build Movie List
-build Movie Card
-TMDB Image CDN URL
-Made the Browsre page amazing with Tailwind CSS
-usePopularMovies Custom hook
-GPT Search Page
-GPT Search Bar
-(BONUS) Multi-language Feature in our App)
-Get Open AI Api Key
-Gpt Search API Call
-fetched gptMoviesSuggestions from TMDB
-created gptSlice added data
-Resused Movie List component to make movie suggestion container
-Memoization
-Added .env file
-Adding .env file to gitignore
-Made our Site Responsive
-Features
-Login/Sign Up
-Sign In /Sign up Form
-redirect to Browse Page
-Browse (after authentication)
-Header
-Main Movie
-Tailer in Background
-Title & Description
-MovieSuggestions
-MovieLists * N
N-etflixGPT
-Search Bar
-Movie Suggestions


##Project Setup
Before starting the project please add .env file and add TMDB and OPENAI KEY into it.
