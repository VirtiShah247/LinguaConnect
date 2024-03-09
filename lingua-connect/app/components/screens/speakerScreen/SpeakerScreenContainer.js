"use client";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import React from "react";
import MediaControlsContainer from "./MediaControlsContainer";
import ParticipantsGridContainer from "./ParticipantsGridContainer";

const SpeakerScreenContainer = ({ meetingId }) => {
  return (
    <MeetingProvider
      token={process.env.NEXT_PUBLIC_SDK_AUTH_TOKEN}
      config={{
        meetingId,
        name: "Manushi's Org",
        micEnabled: true,
        webcamEnabled: true,
      }}
      joinWithoutUserInteraction
    >
      <MediaControlsContainer meetingId={meetingId} />
      <ParticipantsGridContainer />
    </MeetingProvider>
  );
};

export default SpeakerScreenContainer;
