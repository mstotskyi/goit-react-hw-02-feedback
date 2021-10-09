export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="counter">
      {options.map(option => (
        <button
          className="btn"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
