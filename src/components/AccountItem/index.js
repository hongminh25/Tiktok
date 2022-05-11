import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/tiktok-obj/1665481198259201~c5_300x300.webp?x-expires=1652371200&x-signature=l4smTR%2Bpf%2FIKum%2BYLSQ4SiPz5G0%3D"
                alt="Vi"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hoang Khanh Vi</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>thekhanhvi</span>
            </div>
        </div>
    );
}

export default AccountItem;
