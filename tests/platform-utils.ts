import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
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
} from "../generated/Platform/Platform"

export function createBountyClosedEvent(
  id: BigInt,
  remainingReward: BigInt
): BountyClosed {
  let bountyClosedEvent = changetype<BountyClosed>(newMockEvent())

  bountyClosedEvent.parameters = new Array()

  bountyClosedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  bountyClosedEvent.parameters.push(
    new ethereum.EventParam(
      "remainingReward",
      ethereum.Value.fromUnsignedBigInt(remainingReward)
    )
  )

  return bountyClosedEvent
}

export function createBountyCreatedEvent(
  id: BigInt,
  gauge: Address,
  manager: Address,
  rewardToken: Address,
  numberOfPeriods: i32,
  maxRewardPerVote: BigInt,
  rewardPerPeriod: BigInt,
  totalRewardAmount: BigInt,
  isUpgradeable: boolean
): BountyCreated {
  let bountyCreatedEvent = changetype<BountyCreated>(newMockEvent())

  bountyCreatedEvent.parameters = new Array()

  bountyCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  bountyCreatedEvent.parameters.push(
    new ethereum.EventParam("gauge", ethereum.Value.fromAddress(gauge))
  )
  bountyCreatedEvent.parameters.push(
    new ethereum.EventParam("manager", ethereum.Value.fromAddress(manager))
  )
  bountyCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardToken",
      ethereum.Value.fromAddress(rewardToken)
    )
  )
  bountyCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "numberOfPeriods",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(numberOfPeriods))
    )
  )
  bountyCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "maxRewardPerVote",
      ethereum.Value.fromUnsignedBigInt(maxRewardPerVote)
    )
  )
  bountyCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardPerPeriod",
      ethereum.Value.fromUnsignedBigInt(rewardPerPeriod)
    )
  )
  bountyCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "totalRewardAmount",
      ethereum.Value.fromUnsignedBigInt(totalRewardAmount)
    )
  )
  bountyCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "isUpgradeable",
      ethereum.Value.fromBoolean(isUpgradeable)
    )
  )

  return bountyCreatedEvent
}

export function createBountyDurationIncreaseEvent(
  id: BigInt,
  numberOfPeriods: i32,
  totalRewardAmount: BigInt,
  maxRewardPerVote: BigInt
): BountyDurationIncrease {
  let bountyDurationIncreaseEvent = changetype<BountyDurationIncrease>(
    newMockEvent()
  )

  bountyDurationIncreaseEvent.parameters = new Array()

  bountyDurationIncreaseEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  bountyDurationIncreaseEvent.parameters.push(
    new ethereum.EventParam(
      "numberOfPeriods",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(numberOfPeriods))
    )
  )
  bountyDurationIncreaseEvent.parameters.push(
    new ethereum.EventParam(
      "totalRewardAmount",
      ethereum.Value.fromUnsignedBigInt(totalRewardAmount)
    )
  )
  bountyDurationIncreaseEvent.parameters.push(
    new ethereum.EventParam(
      "maxRewardPerVote",
      ethereum.Value.fromUnsignedBigInt(maxRewardPerVote)
    )
  )

  return bountyDurationIncreaseEvent
}

export function createBountyDurationIncreaseQueuedEvent(
  id: BigInt,
  numberOfPeriods: i32,
  totalRewardAmount: BigInt,
  maxRewardPerVote: BigInt
): BountyDurationIncreaseQueued {
  let bountyDurationIncreaseQueuedEvent = changetype<
    BountyDurationIncreaseQueued
  >(newMockEvent())

  bountyDurationIncreaseQueuedEvent.parameters = new Array()

  bountyDurationIncreaseQueuedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  bountyDurationIncreaseQueuedEvent.parameters.push(
    new ethereum.EventParam(
      "numberOfPeriods",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(numberOfPeriods))
    )
  )
  bountyDurationIncreaseQueuedEvent.parameters.push(
    new ethereum.EventParam(
      "totalRewardAmount",
      ethereum.Value.fromUnsignedBigInt(totalRewardAmount)
    )
  )
  bountyDurationIncreaseQueuedEvent.parameters.push(
    new ethereum.EventParam(
      "maxRewardPerVote",
      ethereum.Value.fromUnsignedBigInt(maxRewardPerVote)
    )
  )

  return bountyDurationIncreaseQueuedEvent
}

export function createClaimedEvent(
  user: Address,
  rewardToken: Address,
  bountyId: BigInt,
  amount: BigInt,
  protocolFees: BigInt,
  period: BigInt
): Claimed {
  let claimedEvent = changetype<Claimed>(newMockEvent())

  claimedEvent.parameters = new Array()

  claimedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardToken",
      ethereum.Value.fromAddress(rewardToken)
    )
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam(
      "bountyId",
      ethereum.Value.fromUnsignedBigInt(bountyId)
    )
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam(
      "protocolFees",
      ethereum.Value.fromUnsignedBigInt(protocolFees)
    )
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam("period", ethereum.Value.fromUnsignedBigInt(period))
  )

  return claimedEvent
}

export function createFeeCollectorUpdatedEvent(
  feeCollector: Address
): FeeCollectorUpdated {
  let feeCollectorUpdatedEvent = changetype<FeeCollectorUpdated>(newMockEvent())

  feeCollectorUpdatedEvent.parameters = new Array()

  feeCollectorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "feeCollector",
      ethereum.Value.fromAddress(feeCollector)
    )
  )

  return feeCollectorUpdatedEvent
}

export function createFeeUpdatedEvent(fee: BigInt): FeeUpdated {
  let feeUpdatedEvent = changetype<FeeUpdated>(newMockEvent())

  feeUpdatedEvent.parameters = new Array()

  feeUpdatedEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )

  return feeUpdatedEvent
}

export function createFeesCollectedEvent(
  rewardToken: Address,
  amount: BigInt
): FeesCollected {
  let feesCollectedEvent = changetype<FeesCollected>(newMockEvent())

  feesCollectedEvent.parameters = new Array()

  feesCollectedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardToken",
      ethereum.Value.fromAddress(rewardToken)
    )
  )
  feesCollectedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return feesCollectedEvent
}

export function createManagerUpdatedEvent(
  id: BigInt,
  manager: Address
): ManagerUpdated {
  let managerUpdatedEvent = changetype<ManagerUpdated>(newMockEvent())

  managerUpdatedEvent.parameters = new Array()

  managerUpdatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  managerUpdatedEvent.parameters.push(
    new ethereum.EventParam("manager", ethereum.Value.fromAddress(manager))
  )

  return managerUpdatedEvent
}

export function createOwnershipTransferredEvent(
  user: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPeriodRolledOverEvent(
  id: BigInt,
  periodId: BigInt,
  timestamp: BigInt,
  rewardPerPeriod: BigInt
): PeriodRolledOver {
  let periodRolledOverEvent = changetype<PeriodRolledOver>(newMockEvent())

  periodRolledOverEvent.parameters = new Array()

  periodRolledOverEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  periodRolledOverEvent.parameters.push(
    new ethereum.EventParam(
      "periodId",
      ethereum.Value.fromUnsignedBigInt(periodId)
    )
  )
  periodRolledOverEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  periodRolledOverEvent.parameters.push(
    new ethereum.EventParam(
      "rewardPerPeriod",
      ethereum.Value.fromUnsignedBigInt(rewardPerPeriod)
    )
  )

  return periodRolledOverEvent
}

export function createRecipientSetEvent(
  sender: Address,
  recipient: Address
): RecipientSet {
  let recipientSetEvent = changetype<RecipientSet>(newMockEvent())

  recipientSetEvent.parameters = new Array()

  recipientSetEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  recipientSetEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )

  return recipientSetEvent
}
