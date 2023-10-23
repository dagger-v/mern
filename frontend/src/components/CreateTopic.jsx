const CreateTopic = () => {
  return (
    <div class="about">
      <h3>Create New Topic</h3>
      <form action="" method="POST">
        <div class="form-group">
          <label for="title"></label>
          <input
            class="form-control"
            id="title"
            name="title"
            type="text"
            placeholder="Topic Title"
            minlength="5"
            maxlength="100"
          />
          <p class="forum-text">Must be between 5 and 100 characters.</p>
        </div>
        <div class="form-group">
          <label for="content"></label>
          <textarea
            class="form-control"
            id="content"
            name="content"
            rows="10"
            cols="65"
            placeholder="Write Your Message"
          ></textarea>
        </div>
        <div>
          <label for="author"></label>
          <input id="author" type="text" name="author" hidden />
        </div>
        <div>
          <button type="submit" class="btn btn-success">
            Post Topic
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTopic;
