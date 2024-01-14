
# CineBase 🎥🎥

CineBase is your go-to movie companion, offering a user-friendly platform that provides a treasure trove of information about movies. Much like IMDB, our website empowers users to explore a vast world of cinematic experiences.


## Tech Stack

**Client:** Next.js , TailwindCSS , Tanstack React-Query , React Splide , MUI , Redux

**Server:** Node, Express , JWT , MongoDB


## Challenges Faced

Creating CineBase wasn't without its challenges. One of the most significant hurdles I encountered was developing the API. The API not only handles text data but also image and video files, making it more complex. Implementing features like uploading image and video files was a time-consuming task, but I have successfully overcome these challenges to provide a comprehensive movie database.
## Features
- Discover Movies: Stay in the know about the latest releases, trending films, and upcoming gems in the world of cinema.

- Explore by Genre: Dive into movies tailored to your tastes. Whether you're into animation, sci-fi, or any other genre, we've got you covered.

- Advanced Search: Find movies with pinpoint precision using our advanced search functionality. Your perfect movie is just a few clicks away.

- Seamless Experience: Enjoy the same fantastic experience across different devices, thanks to our responsive design.

- User Authentication: Secure your personalized movie journey with easy and robust user authentication, including signup and login.


## Future Implementation

- Enhanced UI: We're constantly working on improving the user interface to provide a visually stunning and intuitive experience.

- Email Verification: In the near future, we plan to implement email verification as part of our signup process, adding an extra layer of security and user trust.
## Run Locally

Clone the project

```bash
  git clone https://github.com/itsfarhankhan28/CineBase.git
```

Go to the project directory

```bash
  cd moviewebsite
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`

`SECRET_KEY`


## API Reference

#### Get all movies

```http
  GET https://movies-api-others.vercel.app/movies/get
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get movie

```http
  GET https://movies-api-others.vercel.app/movies/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

