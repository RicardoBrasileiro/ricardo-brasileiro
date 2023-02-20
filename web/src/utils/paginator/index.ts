const PaginatorUtil = {
  calculatePages(total: number, limit: number): number {
    let pages = Math.floor(total / limit);

    if (total % limit !== 0) {
      pages++;
    }

    return pages;
  },
};

export default PaginatorUtil;
