import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      {userInfo ? (
        <div class="userbar">
          <div class="ub-u">
            <a href="">{userInfo.name}</a>
          </div>
          <div class="ub-p">
            <a href="/topic/create">New Topic</a>
          </div>
        </div>
      ) : (
        <p className="guest">
          You are browsing this forum as a guest. Please sign in or sign up to
          be able to make topics or post messages.
        </p>
      )}
    </>
  );
};

export default UserInfo;
