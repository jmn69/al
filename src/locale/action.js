export const CHANGE_LOCALE = 'CHANGE_LOCALE';

export const changeLocale = locale => {
  return {
    type: CHANGE_LOCALE,
    payload: locale,
  };
};
