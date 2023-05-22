import React, { useState } from 'react';

const CreatePost = (props) => {
  const [newForm, setNewForm] = useState({
    Game: '',
    Genre: '',
    ReleaseDate: '',
    PlayedOn: '',
    Hours: '',
    Rating: '',
    Review: '',
    Publisher: '',
    Image: '',
  });

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createGame(newForm);
    setNewForm({
      Game: '',
      Genre: '',
      ReleaseDate: '',
      PlayedOn: '',
      Hours: '',
      Rating: '',
      Review: '',
      Publisher: '',
      Image: '',
    });
  };

  return (
    <section>
      <h2 className="create">Create A New Post </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.Game}
          name="Game"
          placeholder="Game Title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.Genre}
          name="Genre"
          placeholder="Genre"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.ReleaseDate}
          name="ReleaseDate"
          placeholder="Release Date"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.PlayedOn}
          name="PlayedOn"
          placeholder="What did you play it on?"
          onChange={handleChange}
        />
        <input
          type="number"
          value={newForm.Hours}
          name="Hours"
          placeholder="Hours Played"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.Rating}
          name="Rating"
          placeholder="ESRB Rating"
          onChange={handleChange}
        />
         <input
          type="text"
          value={newForm.Review}
          name="Review"
          placeholder="Review"
          onChange={handleChange}
        />
         <input
          type="text"
          value={newForm.Publisher}
          name="Publisher"
          placeholder="Publisher"
          onChange={handleChange}
        />
         <input
          type="text"
          value={newForm.Image}
          name="Image"
          placeholder="Image"
          onChange={handleChange}
        />

        {/* Add more input fields for other properties of the game */}
        <input className="button" type="submit" value="Create Post" />
      </form>
    </section>
  );
};

export default CreatePost;






















