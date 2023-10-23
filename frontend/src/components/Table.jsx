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
          <tr>
            <td>
              <span>
                <a href="/board/<%=topic.id %> "> Title </a>
              </span>
            </td>
            <td>
              <span> Author </span>
            </td>
            <td>
              <span> PostCount </span>
            </td>
            <td>
              <span>Date</span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
