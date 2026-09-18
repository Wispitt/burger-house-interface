import { useCallback, useEffect, useState } from 'react';

export const usePrevNextButtons = (emblaApi) => {
	const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
	const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

	const onPrevButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollPrev();
	}, [emblaApi]);

	const onNextButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollNext();
	}, [emblaApi]);

	const onSelect = useCallback((api) => {
		setPrevBtnDisabled(!api.canScrollPrev());
		setNextBtnDisabled(!api.canScrollNext());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		const initialUpdate = requestAnimationFrame(() => onSelect(emblaApi));
		emblaApi.on('reInit', onSelect).on('select', onSelect);

		return () => {
			cancelAnimationFrame(initialUpdate);
			emblaApi.off('reInit', onSelect).off('select', onSelect);
		};
	}, [emblaApi, onSelect]);

	return {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	};
};
