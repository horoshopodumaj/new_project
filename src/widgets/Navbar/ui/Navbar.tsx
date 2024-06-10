import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.mainLink}
                >
                    {t('Главная')}
                </AppLink>
            </div>
        </div>
    );
};
