export default function Home() {
  return (
    <main className="h-screen bg-white">
      <div className="trip-planner-container">
        <iframe
          src="http://localhost:8081/" // Expo's default web dev server
          style={{
            width: "100%",
            height: "600px",
            border: "none",
          }}
          title="Trip Planner"
        />
      </div>
    </main>
  );
}
