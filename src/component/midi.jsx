import React, { useEffect, useState } from "react";
import * as Tone from "tone";

const MIDIPlayer = ({ file }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const loadMIDI = async () => {
      try {
        const response = await fetch(file);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const arrayBuffer = await response.arrayBuffer();
        const midi = new Tone.Midi(arrayBuffer);
        const synth = new Tone.PolySynth().toDestination();

        const now = Tone.now() + 0.5;
        midi.tracks.forEach((track) => {
          track.notes.forEach((note) => {
            synth.triggerAttackRelease(
              note.name,
              note.duration,
              note.time + now,
              note.velocity
            );
          });
        });

        setPlayer(synth);
      } catch (error) {
        console.error("Error loading MIDI file:", error);
      }
    };

    loadMIDI();

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [file, player]);

  const handlePlay = async () => {
    await Tone.start();
    Tone.Transport.start();
  };

  const handleStop = () => {
    Tone.Transport.stop();
    if (player) {
      player.releaseAll();
    }
  };

  return (
    <div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default MIDIPlayer;
