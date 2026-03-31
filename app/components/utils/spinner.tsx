import './spinner.css'
export default function Spinner() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="goog-te-spinner"
        width="50px"
        height="auto"
        viewBox="0 0 66 66"
      >
        <circle
          className="goog-te-spinner-path"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        ></circle>
      </svg>
    </div>
  );
}
