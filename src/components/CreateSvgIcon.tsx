import { ReactElement } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const CreateSvgIcon = ({
  icon,
  ...props
}: {
  icon: ReactElement<SvgIconProps>;
} & SvgIconProps): ReactElement => {
  return <SvgIcon {...props}>{icon}</SvgIcon>;
};

export default CreateSvgIcon;
