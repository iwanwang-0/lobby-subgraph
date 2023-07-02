import {
  BountyClosed as BountyClosedEvent,
  BountyCreated as BountyCreatedEvent,
  BountyDurationIncrease as BountyDurationIncreaseEvent,
  BountyDurationIncreaseQueued as BountyDurationIncreaseQueuedEvent,
  Claimed as ClaimedEvent,
  FeeCollectorUpdated as FeeCollectorUpdatedEvent,
  FeeUpdated as FeeUpdatedEvent,
  FeesCollected as FeesCollectedEvent,
  ManagerUpdated as ManagerUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PeriodRolledOver as PeriodRolledOverEvent,
  RecipientSet as RecipientSetEvent
} from "../generated/Platform/Platform"
import {
  BountyClosed,
  BountyCreated,
  BountyDurationIncrease,
  BountyDurationIncreaseQueued,
  Claimed,
  FeeCollectorUpdated,
  FeeUpdated,
  FeesCollected,
  ManagerUpdated,
  OwnershipTransferred,
  PeriodRolledOver,
  RecipientSet
} from "../generated/schema"

export function handleBountyClosed(event: BountyClosedEvent): void {
  let entity = new BountyClosed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Platform_id = event.params.id
  entity.remainingReward = event.params.remainingReward

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBountyCreated(event: BountyCreatedEvent): void {
  let entity = new BountyCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Platform_id = event.params.id
  entity.gauge = event.params.gauge
  entity.manager = event.params.manager
  entity.rewardToken = event.params.rewardToken
  entity.numberOfPeriods = event.params.numberOfPeriods
  entity.maxRewardPerVote = event.params.maxRewardPerVote
  entity.rewardPerPeriod = event.params.rewardPerPeriod
  entity.totalRewardAmount = event.params.totalRewardAmount
  entity.isUpgradeable = event.params.isUpgradeable

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBountyDurationIncrease(
  event: BountyDurationIncreaseEvent
): void {
  let entity = new BountyDurationIncrease(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Platform_id = event.params.id
  entity.numberOfPeriods = event.params.numberOfPeriods
  entity.totalRewardAmount = event.params.totalRewardAmount
  entity.maxRewardPerVote = event.params.maxRewardPerVote

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBountyDurationIncreaseQueued(
  event: BountyDurationIncreaseQueuedEvent
): void {
  let entity = new BountyDurationIncreaseQueued(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Platform_id = event.params.id
  entity.numberOfPeriods = event.params.numberOfPeriods
  entity.totalRewardAmount = event.params.totalRewardAmount
  entity.maxRewardPerVote = event.params.maxRewardPerVote

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimed(event: ClaimedEvent): void {
  // let entity = 

  let entity = new Claimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.rewardToken = event.params.rewardToken
  entity.bountyId = event.params.bountyId
  entity.amount = event.params.amount
  entity.protocolFees = event.params.protocolFees
  entity.period = event.params.period

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeCollectorUpdated(
  event: FeeCollectorUpdatedEvent
): void {
  let entity = new FeeCollectorUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.feeCollector = event.params.feeCollector

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeUpdated(event: FeeUpdatedEvent): void {
  let entity = new FeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fee = event.params.fee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeesCollected(event: FeesCollectedEvent): void {
  let entity = new FeesCollected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.rewardToken = event.params.rewardToken
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleManagerUpdated(event: ManagerUpdatedEvent): void {
  let entity = new ManagerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Platform_id = event.params.id
  entity.manager = event.params.manager

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePeriodRolledOver(event: PeriodRolledOverEvent): void {
  let entity = new PeriodRolledOver(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Platform_id = event.params.id
  entity.periodId = event.params.periodId
  entity.timestamp = event.params.timestamp
  entity.rewardPerPeriod = event.params.rewardPerPeriod

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRecipientSet(event: RecipientSetEvent): void {
  let entity = new RecipientSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.recipient = event.params.recipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
