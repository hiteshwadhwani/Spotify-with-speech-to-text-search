import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function SearchBar({listening}) {
  return (
    <>
      <div
        onClick={SpeechRecognition.startListening}
        className="text-center bg-slate-200 rounded-lg my-3 p-3 cursor-pointer"
      >
        {listening ? "listening" : "Click to start listening"}
      </div>
    </>
  );
}
