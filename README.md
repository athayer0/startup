# Welcome Home, Elder!

[My Notes](notes.md)

A web page for returned missionaries that takes in the user's start and end dates of their mission and returns everything that happened in pop culture, the news, and the world as a whole while they were gone.

## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Just got home from your mission and feel like the world hit fast-forward while you were gone? Never fear! Just plug in your mission dates, and it’ll instantly show you the big stuff you missed: world events, church news, tech trends, even pop culture. It’s the fastest way to get caught up and back into the swing of things without feeling two years behind.

### Design

![Design image](welcomehomeelder-roughdraft.jpg)


```mermaid
sequenceDiagram
    actor You
    actor Website
    You->>Website: Replace this with your design
```

### Key features

- Ability to enter in mission start and end dates
- Option to filter by songs, movies, pop culture, world news, etc.
- Display of reviews for rateable items like movies and songs
- Ability to change what category to filter by
- Ability to bookmark events and come back to them later
- Display of timeline for key events
- Videos, photos, and links for popular songs, movies, articles, etc. they missed
- Shareability to social media
- Option to create Spotify playlist from the songs they missed by genre

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Provides the structure of the app, including the mission date input, event timeline, and category filters.
- **CSS** - Styles the app with good spacing and colloring and ensures it looks good and works well on all screen sizes, including mobile.
- **React** - Manages dynamic content and interactivity, letting the timeline, event cards, and filters update instantly when users interact.
- **Service** - Backend sercive with endpoints for:
    - login
    - fetches and processes events, news, and media from third party sources
    - retrieving and submitting bookmarked events
- **DB/Login** - Stores user accounts, saved timelines, and preferences. Register and login users. Credentials securely stored in database.
- **WebSocket** - Supports real-time features, like displaying the total amount of people on the webpage as well as the total times each event has been saved.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://welcomehomeelder.com).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - Four HTML pages for login, date entry, timeline display, and daved events.
- [x] **Proper HTML element usage** - Used a variety of HTML elements (p, a, img, div, input, button, form, etc.)
- [x] **Links** - Navigation section at the top of each page as well as links from page to page using buttons. 
- [x] **Text** - Headers to descibe each page and text for info on event data from the timeline
- [x] **3rd party API placeholder** - "Generate Timeline" button in date-entry.html will use OpenAI GPT AI to curate a timeline of events the user missed based on the dates they entered.
- [x] **Images** - Added an image to the login page and an icon that appears in the tab up top.
- [x] **Login placeholder** - Input boxes with placeholders for username and password.
- [x] **DB data placeholder** - Option to save events that appear in the saved events page and stay between logins. Events can be removed as well.
- [x] **WebSocket placeholder** - Displays in the header of each page the total amount of people on the webpage as well as the total times each event has been saved next to each event.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
