import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

// для тестирования
export const BugButton = () => {
    const { t } = useTranslation();

    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (!error) return;
        throw new Error();
    }, [error]);

    return (
        <Button
            onClick={onThrow}
        >
            {t('Ошибка')}
        </Button>
    );
};
