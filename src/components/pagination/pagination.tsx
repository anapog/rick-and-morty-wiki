import { CURRENT_PAGE_NEIGHBOURS, ELLIPSIS_SIDES } from '../../constants/pagination.constants';

const Pagination = ({
	pages,
	currentPage,
	onPageChange,
}: {
	pages: number;
	currentPage: number;
	onPageChange: (newPage: number) => void;
}): JSX.Element => {
	console.log('*** rx pages number', pages);

	const handlePageClick = (index: number) => (): void => {
		onPageChange(index);
	};

	const getPageButton = (pageNumber: number): JSX.Element => (
		<div
			key={pageNumber}
			onClick={handlePageClick(pageNumber)}
			className={currentPage === pageNumber ? 'active' : undefined}
		>
			{pageNumber}
		</div>
	);

	const getDots = (side: ELLIPSIS_SIDES): JSX.Element => (
		<div
			key={`side-${side}`}
			// onClick={handleDotsClick(side)}
			className="pagination-ellipsis"
		>
			...
		</div>
	);

	const hasLeftSpill = currentPage > CURRENT_PAGE_NEIGHBOURS;
	const hasRightSpill = pages - currentPage > 1;
	const centerEllipsisLenght = CURRENT_PAGE_NEIGHBOURS * 2 + 1;
	// 1 ... 3 4 5 6 7... 42
	console.log('** current ', currentPage);

	return (
		<div className="pagination-container">
			{hasLeftSpill && (
				<>
					{getPageButton(1)}
					{getDots(ELLIPSIS_SIDES.left)}
				</>
			)}
			{!hasLeftSpill &&
				hasRightSpill &&
				Array.from({ length: centerEllipsisLenght }, (_, i) => getPageButton(i + 1))}
			{hasLeftSpill &&
				hasRightSpill &&
				Array.from({ length: centerEllipsisLenght }, (_, i) =>
					getPageButton(currentPage - CURRENT_PAGE_NEIGHBOURS + i)
				)}
			{hasLeftSpill &&
				!hasRightSpill &&
				Array.from({ length: centerEllipsisLenght }, (_, i) =>
					getPageButton(pages - (centerEllipsisLenght - i) + 1)
				)}
			{hasRightSpill && (
				<>
					{getDots(ELLIPSIS_SIDES.right)}
					{getPageButton(pages)}
				</>
			)}
		</div>
	);
};
export default Pagination;
