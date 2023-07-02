import {
  Claimed as ClaimedEvent,
  MerkleRootUpdated as MerkleRootUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/MultiMerkleStash/MultiMerkleStash"
import {
  Claimed,
  MerkleRootUpdated,
  OwnershipTransferred
} from "../generated/schema"

export function handleClaimed(event: ClaimedEvent): void {
  let entity = new Claimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.index = event.params.index
  entity.amount = event.params.amount
  entity.account = event.params.account
  entity.update = event.params.update

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMerkleRootUpdated(event: MerkleRootUpdatedEvent): void {
  let entity = new MerkleRootUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.merkleRoot = event.params.merkleRoot
  entity.update = event.params.update

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
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
