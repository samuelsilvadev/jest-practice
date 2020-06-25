const MAXIMUM_RANK = 8;
const MAXIMUM_PROGRESS = 100;
const ALLOWED_RANKS = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
const SAME_LEVEL = 0;
const ONE_LEVEL_LOWER = 1;

function User() {
	if (this === global.window || !this) {
		throw new Error('You should use `new` to use this function');
	}

	this.rank = -8;
	let progress = 0;

	Object.defineProperty(this, 'progress', {
		get() {
			console.log('get progress', progress);
			return progress;
		},
		set(newProgress) {
			console.log('set progress', newProgress);
			progress = newProgress;
		},
	});
}

User.prototype.getPoints = function getPoints(rank) {
	const currentIndex = ALLOWED_RANKS.indexOf(this.rank);
	const destinyIndex = ALLOWED_RANKS.indexOf(rank);

	const rankDifference = Math.abs(destinyIndex - currentIndex);

	if (rank > this.rank) {
		return 10 * rankDifference * rankDifference;
	}

	switch (rankDifference) {
	case SAME_LEVEL:
		return 3;
	case ONE_LEVEL_LOWER:
		return 1;
	default:
		return 0;
	}
};

User.prototype.incProgress = function incProgress(rank) {
	debugger;
	const currentRankIndex = ALLOWED_RANKS.indexOf(rank);

	if (currentRankIndex === -1) {
		throw new Error('Invalid rank parameter');
	}

	if (this.rank === MAXIMUM_RANK) {
		this.progress = 0;
		return this;
	}

	const newPoints = this.getPoints(rank);
	let pointsCounter = newPoints;

	while (pointsCounter > 0) {
		// to increase the level
		if (pointsCounter >= MAXIMUM_PROGRESS) {
			if (this.rank < MAXIMUM_RANK) {
				const nextRank = ALLOWED_RANKS.indexOf(this.rank) + 1;
				this.rank = ALLOWED_RANKS[nextRank];

				// here we can apply only 100
				// if value is bigger than 100 and
				// decrement the progress count

				if (this.progress >= MAXIMUM_PROGRESS) {
					this.progress -= MAXIMUM_PROGRESS;
				}

				pointsCounter -= MAXIMUM_PROGRESS;

				if (pointsCounter < MAXIMUM_PROGRESS) {
					break;
				}
			} else {
				this.progress = 0;
				break;
			}
			// just update progress
		} else {
			this.progress += pointsCounter;

			if (this.progress >= MAXIMUM_PROGRESS) {
				pointsCounter = this.progress;
			} else {
				break;
			}
		}
	}

	return this;
};

const user = new User();
user.rank = 7;
user.progress = 94;
user.incProgress(8);

module.exports = User;
