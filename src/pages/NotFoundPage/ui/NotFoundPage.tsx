import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.notFoundPage, {}, [className])} />
    );
};
