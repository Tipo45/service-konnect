
export default function Progress({ totalSteps, step }) {

  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <>
      <div className="progress"
      style={{
        height: "4px",
        background: "pink",
        width: "100%",
        transition: "all 0.4s ease-in",
      }}>
        <div className="progress"
        style={{
            height: "4px",
            background: "red",
            width: `${progress}%`,
            transition: "all 0.4s ease-in",
          }}
          ></div>
      </div>
    </>
  );
}
