import { styled } from "@/styles";
import Stack from "@/components/Stack";
import Avatar from "@/components/Avatar";
import type { MemberOptions } from "@/types";

type MembersProps = {
  members: Array<MemberOptions>;
  updateSelectedUser: (user: MemberOptions) => void;
};

function Members({ members, updateSelectedUser }: MembersProps) {
  return (
    <MembersContainer type="row" gap={1}>
      <MembersText>{members.length} Team Members</MembersText>
      <AvatarList>
        {members.map((member) => {
          return (
            <Avatar
              key={member}
              user={member}
              updateSelectedUser={updateSelectedUser}
            />
          );
        })}
      </AvatarList>
    </MembersContainer>
  );
}

export default Members;

const MembersContainer = styled(Stack, {
  display: "grid",

  "@bp1": {
    display: "none",
  },
});

const MembersText = styled("span", {
  color: "$indigo12",
});

const AvatarList = styled("div", {
  display: "grid",
  gridAutoFlow: "column",
  gridGap: "0.2rem",
});
