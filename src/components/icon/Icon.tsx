import React from 'react';

type IconProps = {
    icon: string;
    alt: string;
};

const Icon: React.FC<IconProps> = (props) => {
    const {icon, alt} = props;

    const iconStyle = {margin: '4% 1% 0'};

    return <img src={icon} alt={alt} width={30} height={30} style={iconStyle}/>;
};

Icon.displayName = 'Icon';

export default Icon;
