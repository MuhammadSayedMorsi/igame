interface Props {
  logo: string
}
const GameIcon: React.FC<Props> = ({ logo }) => {
  return (
    <button className="focus:outline-none mt-4 mb-4 mr-4 transition duration-500 transform hover:scale-110">
      <span role="img" aria-label="Game Logo">
        <img src={logo} alt="Game Logo" />
      </span>
    </button>
  )
}
export default GameIcon
