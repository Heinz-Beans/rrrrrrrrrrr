import { Player } from "@/lib/types";
import { AvatarImage } from "@radix-ui/react-avatar";
import { memo } from "react";
import { Avatar } from "./avatar";

export const PlayerDetails = memo(function PlayerDetails({ player }: { player: Player }) {
  return (
    <div className="flex items-center w-full flex-col">
      <Avatar className="w-[80px] h-[80px]">
        <AvatarImage src={player.avatar} alt={`${player.name}'s avatar`} />
      </Avatar>
      <div>
        {player.bio && <p className="text-sm text-gray-500 mt-2">{player.bio}</p>}
      </div>
    </div>
  );
});
