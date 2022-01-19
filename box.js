import React from "react";

export default function box() {
  return (
    <View
      style={{
        height: '10%',
        flexDirection:'row',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width:'40%',
          height: '5%',
          backgroundColor: "gray",
        }}
      >
        <View
          style={{
            width: cardState === 1 ? "25%" : cardState === 2 ? "50%" : "100%",
            backgroundColor: "#D63864",
            height: "5px",
          }}
        ></View>

        <View style={{ display: "flex", justifyContent: "space-between" }}>
          {icons.map((i) => (
            <IconContainer
              label={i.label}
              cardState={cardState}
              setCard={(s) => {
                setCardstate(s);
              }}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
