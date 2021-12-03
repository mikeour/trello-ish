import * as Avatar from "@radix-ui/react-avatar";
import { styled } from "@/styles";
import type { MemberOptions } from "@/types";

const noop = () => {};

function UserAvatar({
  user,
  updateSelectedUser = noop,
}: {
  user: MemberOptions;
  updateSelectedUser?: (user: MemberOptions) => void;
}) {
  return (
    <AvatarRoot onClick={() => updateSelectedUser(user)}>
      <AvatarFallback user={user}>{user}</AvatarFallback>
    </AvatarRoot>
  );
}

export default UserAvatar;

const AvatarRoot = styled(Avatar.Root, {
  size: "30px",
});

const AvatarFallback = styled(Avatar.Fallback, {
  size: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "13px",
  fontWeight: "600",
  borderRadius: "100%",

  variants: {
    user: {
      M: {
        bg: "radial-gradient($colors$crimson9, $colors$crimson9)",
        color: "$crimson3",
      },
      J: {
        bg: "radial-gradient($colors$grass9, $colors$grass9)",
        color: "$grass3",
      },
      C: {
        bg: "radial-gradient($colors$violet9, $colors$violet9)",
        color: "$violet3",
      },
    },
  },
});
