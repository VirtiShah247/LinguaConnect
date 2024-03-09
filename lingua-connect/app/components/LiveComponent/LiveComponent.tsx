"use client"
import React, { useState } from "react";
import SpeakerScreenContainer from "@/app/components/screens/speakerScreen/SpeakerScreenContainer";
import ViewerScreenContainer from "@/app/components/screens/ViewerScreenContainer";
import WelcomeScreenContainer from "@/app/components/screens/WelcomeScreenContainer";

function LiveComponent() {
  const [appData, setAppData] = useState({ meetingId: null, mode: null });

  return appData.meetingId ? (
    appData.mode === "CONFERENCE" ? (
      <SpeakerScreenContainer meetingId={appData.meetingId} />
    ) : (
      <ViewerScreenContainer meetingId={appData.meetingId} />
    )
  ) : (
    <WelcomeScreenContainer setAppData={setAppData} />
  );
}

export default LiveComponent;
