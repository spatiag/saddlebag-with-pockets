import Icon from './svg/Armoury_Necklace.svg';
import {FC} from "react";

type Props = {
    className?: string;
}

export const Necklaces: FC<Props> = ({className = ''}) =>
    {
        // @ts-ignore
        return <Icon className={className}/>;
    };
