interface PaginationProps {
  previousPage?: string;
  onHandlePrevious: VoidFunction;
  onHandleNext: VoidFunction;
}

export const Pagination = ({
  onHandleNext,
  onHandlePrevious,
  previousPage,
}: PaginationProps) => {
  return (
    <>
      <label
        className={`
        mr-2
        ${
          previousPage !== null
            ? "text-blue-600 hover:text-blue-800 cursor-pointer dark:text-white"
            : "text-gray-500"
        }`}
        onClick={previousPage !== null ? onHandlePrevious : () => {}}
      >
        {"<<"} Anterior
      </label>
      <label className="text-blue-600 dark:text-white">||</label>
      <label
        onClick={onHandleNext}
        className={`
  ml-2
  ${
    previousPage !== null
      ? "text-blue-600 hover:text-blue-800 cursor-pointer dark:text-white"
      : "text-gray-500"
  }`}
      >
        Próximo {">>"}
      </label>
    </>
  );
};
