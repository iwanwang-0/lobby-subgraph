import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Blacklisted as BlacklistedEvent,
  ChangeOwner as ChangeOwnerEvent,
  ClearRewardRecipient as ClearRewardRecipientEvent,
  FeeUpdated as FeeUpdatedEvent,
  NewTokenReward as NewTokenRewardEvent,
  PeriodUpdated as PeriodUpdatedEvent,
  RemovedFromBlacklist as RemovedFromBlacklistEvent,
  RewardAdded as RewardAddedEvent,
  RewardClaimed as RewardClaimedEvent,
  SetRewardRecipient as SetRewardRecipientEvent
} from "../generated/yBribe/yBribe"
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
  SetRewardRecipient,
  ClaimedRecord
} from "../generated/schema"

export function handleBlacklisted(event: BlacklistedEvent): void {
  let entity = new Blacklisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangeOwner(event: ChangeOwnerEvent): void {
  let entity = new ChangeOwner(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClearRewardRecipient(
  event: ClearRewardRecipientEvent
): void {
  let entity = new ClearRewardRecipient(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.recipient = event.params.recipient

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

export function handleNewTokenReward(event: NewTokenRewardEvent): void {
  let entity = new NewTokenReward(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gauge = event.params.gauge
  entity.reward_token = event.params.reward_token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePeriodUpdated(event: PeriodUpdatedEvent): void {
  let entity = new PeriodUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gauge = event.params.gauge
  entity.period = event.params.period
  entity.bias = event.params.bias
  entity.blacklisted_bias = event.params.blacklisted_bias

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRemovedFromBlacklist(
  event: RemovedFromBlacklistEvent
): void {
  let entity = new RemovedFromBlacklist(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardAdded(event: RewardAddedEvent): void {
  let entity = new RewardAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.briber = event.params.briber
  entity.gauge = event.params.gauge
  entity.reward_token = event.params.reward_token
  entity.amount = event.params.amount
  entity.fee = event.params.fee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardClaimed(event: RewardClaimedEvent): void {
  const entityId = Bytes.fromUTF8("Lobby_Claim_Reward_Records");
  let entity = ClaimedRecord.load(entityId);
  if (entity == null) {
    entity = new ClaimedRecord(entityId)
  }
  entity.user = event.params.user
  entity.rewardToken = event.params.reward_token
  entity.amount = event.params.amount
  entity.period = new BigInt(0)
  entity.platform = Bytes.fromUTF8("yBribe");
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetRewardRecipient(event: SetRewardRecipientEvent): void {
  let entity = new SetRewardRecipient(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.recipient = event.params.recipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
