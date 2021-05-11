import BG from "../../../assets/images/wallhaven-vm616l.jpeg";

export const DashboardScreen = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return (
    <div
      style={{
        backgroundImage: `url(${BG})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div
        style={{
          height: "100vh",
          justifyContent: "center",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ color: "white", fontSize: 40 }}>Farkhan Azmi</div>
        <div style={{ color: "white", fontSize: 20 }}>Ordinary Khan</div>
      </div>
    </div>
  );
};
