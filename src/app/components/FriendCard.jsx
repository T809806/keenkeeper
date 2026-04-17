export default function FriendCard({ friend }) {
  return (
    <div>
      <img src={friend.picture} />
      <h1>{friend.name}</h1>
    </div>
  );
}