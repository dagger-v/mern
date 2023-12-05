import { topics } from "../../data";

const Table = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Author</th>
            <th>Post Count</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic) => (
            <tr>
              <td>
                <span>
                  <a href="#"> {topic.title} </a>
                </span>
              </td>
              <td>
                <span> {topic.author} </span>
              </td>
              <td>
                <span> {topic.postCount} </span>
              </td>
              <td>
                <span> {topic.createdAt} </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
