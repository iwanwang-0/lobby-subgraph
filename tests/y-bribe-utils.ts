import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Blacklisted,
  ChangeOwner,
  ClearRewardRecipient,
  FeeUpdated,
  NewTokenReward,
  PeriodUpdated,
  RemovedFromBlacklist,
  RewardAdded,
  RewardClaimed,
  SetRewardRecipient
} from "../generated/yBribe/yBribe"

export function createBlacklistedEvent(user: Address): Blacklisted {
  let blacklistedEvent = changetype<Blacklisted>(newMockEvent())

  blacklistedEvent.parameters = new Array()

  blacklistedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return blacklistedEvent
}

export function createChangeOwnerEvent(owner: Address): ChangeOwner {
  let changeOwnerEvent = changetype<ChangeOwner>(newMockEvent())

  changeOwnerEvent.parameters = new Array()

  changeOwnerEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return changeOwnerEvent
}

export function createClearRewardRecipientEvent(
  user: Address,
  recipient: Address
): ClearRewardRecipient {
  let clearRewardRecipientEvent = changetype<ClearRewardRecipient>(
    newMockEvent()
  )

  clearRewardRecipientEvent.parameters = new Array()

  clearRewardRecipientEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  clearRewardRecipientEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )

  return clearRewardRecipientEvent
}

export function createFeeUpdatedEvent(fee: BigInt): FeeUpdated {
  let feeUpdatedEvent = changetype<FeeUpdated>(newMockEvent())

  feeUpdatedEvent.parameters = new Array()

  feeUpdatedEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )

  return feeUpdatedEvent
}

export function createNewTokenRewardEvent(
  gauge: Address,
  reward_token: Address
): NewTokenReward {
  let newTokenRewardEvent = changetype<NewTokenReward>(newMockEvent())

  newTokenRewardEvent.parameters = new Array()

  newTokenRewardEvent.parameters.push(
    new ethereum.EventParam("gauge", ethereum.Value.fromAddress(gauge))
  )
  newTokenRewardEvent.parameters.push(
    new ethereum.EventParam(
      "reward_token",
      ethereum.Value.fromAddress(reward_token)
    )
  )

  return newTokenRewardEvent
}

export function createPeriodUpdatedEvent(
  gauge: Address,
  period: BigInt,
  bias: BigInt,
  blacklisted_bias: BigInt
): PeriodUpdated {
  let periodUpdatedEvent = changetype<PeriodUpdated>(newMockEvent())

  periodUpdatedEvent.parameters = new Array()

  periodUpdatedEvent.parameters.push(
    new ethereum.EventParam("gauge", ethereum.Value.fromAddress(gauge))
  )
  periodUpdatedEvent.parameters.push(
    new ethereum.EventParam("period", ethereum.Value.fromUnsignedBigInt(period))
  )
  periodUpdatedEvent.parameters.push(
    new ethereum.EventParam("bias", ethereum.Value.fromUnsignedBigInt(bias))
  )
  periodUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "blacklisted_bias",
      ethereum.Value.fromUnsignedBigInt(blacklisted_bias)
    )
  )

  return periodUpdatedEvent
}

export function createRemovedFromBlacklistEvent(
  user: Address
): RemovedFromBlacklist {
  let removedFromBlacklistEvent = changetype<RemovedFromBlacklist>(
    newMockEvent()
  )

  removedFromBlacklistEvent.parameters = new Array()

  removedFromBlacklistEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return removedFromBlacklistEvent
}

export function createRewardAddedEvent(
  briber: Address,
  gauge: Address,
  reward_token: Address,
  amount: BigInt,
  fee: BigInt
): RewardAdded {
  let rewardAddedEvent = changetype<RewardAdded>(newMockEvent())

  rewardAddedEvent.parameters = new Array()

  rewardAddedEvent.parameters.push(
    new ethereum.EventParam("briber", ethereum.Value.fromAddress(briber))
  )
  rewardAddedEvent.parameters.push(
    new ethereum.EventParam("gauge", ethereum.Value.fromAddress(gauge))
  )
  rewardAddedEvent.parameters.push(
    new ethereum.EventParam(
      "reward_token",
      ethereum.Value.fromAddress(reward_token)
    )
  )
  rewardAddedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  rewardAddedEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )

  return rewardAddedEvent
}

export function createRewardClaimedEvent(
  user: Address,
  gauge: Address,
  reward_token: Address,
  amount: BigInt
): RewardClaimed {
  let rewardClaimedEvent = changetype<RewardClaimed>(newMockEvent())

  rewardClaimedEvent.parameters = new Array()

  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam("gauge", ethereum.Value.fromAddress(gauge))
  )
  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "reward_token",
      ethereum.Value.fromAddress(reward_token)
    )
  )
  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return rewardClaimedEvent
}

export function createSetRewardRecipientEvent(
  user: Address,
  recipient: Address
): SetRewardRecipient {
  let setRewardRecipientEvent = changetype<SetRewardRecipient>(newMockEvent())

  setRewardRecipientEvent.parameters = new Array()

  setRewardRecipientEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  setRewardRecipientEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )

  return setRewardRecipientEvent
}
