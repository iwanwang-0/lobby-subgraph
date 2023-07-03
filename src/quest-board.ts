import {
  ApprovedManager as ApprovedManagerEvent,
  ChestUpdated as ChestUpdatedEvent,
  DistributorUpdated as DistributorUpdatedEvent,
  EmergencyWithdraw as EmergencyWithdrawEvent,
  IncreasedQuestDuration as IncreasedQuestDurationEvent,
  IncreasedQuestObjective as IncreasedQuestObjectiveEvent,
  IncreasedQuestReward as IncreasedQuestRewardEvent,
  InitDistributor as InitDistributorEvent,
  Killed as KilledEvent,
  MinObjectiveUpdated as MinObjectiveUpdatedEvent,
  NewPendingOwner as NewPendingOwnerEvent,
  NewQuest as NewQuestEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PeriodClosed as PeriodClosedEvent,
  PlatformFeeUpdated as PlatformFeeUpdatedEvent,
  RemovedManager as RemovedManagerEvent,
  Unkilled as UnkilledEvent,
  UpdateRewardToken as UpdateRewardTokenEvent,
  WhitelistToken as WhitelistTokenEvent,
  WithdrawUnusedRewards as WithdrawUnusedRewardsEvent
} from "../generated/QuestBoard/QuestBoard"
import {
  ApprovedManager,
  ChestUpdated,
  DistributorUpdated,
  EmergencyWithdraw,
  IncreasedQuestDuration,
  IncreasedQuestObjective,
  IncreasedQuestReward,
  InitDistributor,
  Killed,
  MinObjectiveUpdated,
  NewPendingOwner,
  NewQuest,
  OwnershipTransferred,
  PeriodClosed,
  PlatformFeeUpdated,
  RemovedManager,
  Unkilled,
  UpdateRewardToken,
  WhitelistToken,
  WithdrawUnusedRewards
} from "../generated/schema"

export function handleApprovedManager(event: ApprovedManagerEvent): void {
  // let entity = new ApprovedManager(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.manager = event.params.manager

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleChestUpdated(event: ChestUpdatedEvent): void {
  // let entity = new ChestUpdated(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.oldChest = event.params.oldChest
  // entity.newChest = event.params.newChest

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleDistributorUpdated(event: DistributorUpdatedEvent): void {
  // let entity = new DistributorUpdated(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.oldDistributor = event.params.oldDistributor
  // entity.newDistributor = event.params.newDistributor

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleEmergencyWithdraw(event: EmergencyWithdrawEvent): void {
  // let entity = new EmergencyWithdraw(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.questID = event.params.questID
  // entity.recipient = event.params.recipient
  // entity.amount = event.params.amount

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleIncreasedQuestDuration(
  event: IncreasedQuestDurationEvent
): void {
  // let entity = new IncreasedQuestDuration(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.questID = event.params.questID
  // entity.addedDuration = event.params.addedDuration
  // entity.addedRewardAmount = event.params.addedRewardAmount

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleIncreasedQuestObjective(
  event: IncreasedQuestObjectiveEvent
): void {
  // let entity = new IncreasedQuestObjective(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.questID = event.params.questID
  // entity.updatePeriod = event.params.updatePeriod
  // entity.newObjective = event.params.newObjective
  // entity.addedRewardAmount = event.params.addedRewardAmount

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleIncreasedQuestReward(
  event: IncreasedQuestRewardEvent
): void {
  // let entity = new IncreasedQuestReward(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.questID = event.params.questID
  // entity.updatePeriod = event.params.updatePeriod
  // entity.newRewardPerVote = event.params.newRewardPerVote
  // entity.addedRewardAmount = event.params.addedRewardAmount

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleInitDistributor(event: InitDistributorEvent): void {
  // let entity = new InitDistributor(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.distributor = event.params.distributor

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleKilled(event: KilledEvent): void {
  // let entity = new Killed(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.killTime = event.params.killTime

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleMinObjectiveUpdated(
  event: MinObjectiveUpdatedEvent
): void {
  // let entity = new MinObjectiveUpdated(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.oldMinObjective = event.params.oldMinObjective
  // entity.newMinObjective = event.params.newMinObjective

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleNewPendingOwner(event: NewPendingOwnerEvent): void {
  // let entity = new NewPendingOwner(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.previousPendingOwner = event.params.previousPendingOwner
  // entity.newPendingOwner = event.params.newPendingOwner

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleNewQuest(event: NewQuestEvent): void {
  // let entity = new NewQuest(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.questID = event.params.questID
  // entity.creator = event.params.creator
  // entity.gauge = event.params.gauge
  // entity.rewardToken = event.params.rewardToken
  // entity.duration = event.params.duration
  // entity.startPeriod = event.params.startPeriod
  // entity.objectiveVotes = event.params.objectiveVotes
  // entity.rewardPerVote = event.params.rewardPerVote

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  // let entity = new OwnershipTransferred(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // // entity.previousOwner = event.params.previousOwner
  // entity.newOwner = event.params.newOwner

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handlePeriodClosed(event: PeriodClosedEvent): void {
  // let entity = new PeriodClosed(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.questID = event.params.questID
  // entity.period = event.params.period

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handlePlatformFeeUpdated(event: PlatformFeeUpdatedEvent): void {
  // let entity = new PlatformFeeUpdated(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.oldfee = event.params.oldfee
  // entity.newFee = event.params.newFee

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleRemovedManager(event: RemovedManagerEvent): void {
  // let entity = new RemovedManager(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.manager = event.params.manager

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleUnkilled(event: UnkilledEvent): void {
  // let entity = new Unkilled(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.unkillTime = event.params.unkillTime

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleUpdateRewardToken(event: UpdateRewardTokenEvent): void {
  // let entity = new UpdateRewardToken(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.token = event.params.token
  // entity.newMinRewardPerVote = event.params.newMinRewardPerVote

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleWhitelistToken(event: WhitelistTokenEvent): void {
  // let entity = new WhitelistToken(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.token = event.params.token
  // entity.minRewardPerVote = event.params.minRewardPerVote

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleWithdrawUnusedRewards(
  event: WithdrawUnusedRewardsEvent
): void {
  // let entity = new WithdrawUnusedRewards(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.questID = event.params.questID
  // entity.recipient = event.params.recipient
  // entity.amount = event.params.amount

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}
