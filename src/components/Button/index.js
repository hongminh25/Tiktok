import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    text = false,
    large = false,
    small = false,
    primary = false,
    outline = false,
    disabled = false,
    rounded = false,
    className,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,

        ...passProps,
    };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        [className]: className,
        rounded,
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    text: PropTypes.bool,
    large: PropTypes.bool,
    small: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default Button;
