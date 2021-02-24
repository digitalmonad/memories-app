import close from "../../assets/close.svg";
import error from "../../assets/error.svg";
import styled from "styled-components";
import success from "../../assets/success.svg";

const icons = {
  close,
  success,
  error,
};

// TODO: solve this mapping better

type IconsMapT = typeof icons;
export type IconVariantT = keyof IconsMapT;

export enum IconKind {
  close = "close",
  success = "success",
  error = "error",
}

type IconPropsT = {
  size?: string;
  width?: string;
  height?: string;
  background?: string;
  icon: IconKind;
  selected?: string;
  selectedIcon?: string;
  selectedColor?: string;
};

export const Icon = styled.span<IconPropsT>`
  position: relative;
  display: inline-block;
  width: ${(props) => props.size || props.width || "1rem"};
  height: ${(props) => props.size || props.height || "1rem"};
  background-color: ${({ background }) => background || "transparent"};
  &:before {
    content: "";
    mask-image: ${({ icon }) => `url(${icons[icon]})`};
    mask-size: ${(props) => props.size || "1rem"};
    background-repeat: no-repeat;
    width: ${(props) => props.size || "1rem"};
    background-color: ${({ color, selected, selectedColor }) =>
      selected ? selectedColor || color : color};
    height: ${(props) => props.size || "1rem"};
    position: absolute;
    top: ${(props) => `calc(50% - ${props.size || "1rem"}/2)`};
    left: ${(props) => `calc(50% - ${props.size || "1rem"}/2)`};
  }
`;

export default Icon;
