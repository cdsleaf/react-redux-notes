import { useState, useEffect } from 'react';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

export const useDebounce = (func, time) => {
    const [values] = useState(() => new Subject());

    useEffect(() => {
        const subscribe = values.pipe(debounceTime(time)).subscribe(func);
        return () => subscribe.unsubscribe();
    }, [values, func, time]);

    return [values, (v) => values.next(v)];
};
